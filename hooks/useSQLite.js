import * as FileSystem from "expo-file-system";
import { useState, useEffect } from 'react';
import * as SQLite from "expo-sqlite";
import { Asset } from "expo-asset";

const getDatabase = async () =>
{
    const SQLite3Path = FileSystem.documentDirectory + 'SQLite';
    if (!(await FileSystem.getInfoAsync(SQLite3Path)).exists)
    {
        await FileSystem.makeDirectoryAsync(SQLite3Path);
    }
    await FileSystem.downloadAsync(
        Asset.fromModule(require("../contacts.db")).uri,
        SQLite3Path + '/contacts.db'
    );
    return SQLite.openDatabase('contacts.db');
}

export default function useSQLite()
{
    const db = getDatabase();
    const [listContact, setListContact] = useState([]);
    const [forceReload, setForceReload] = useState(true);

    useEffect(() =>
    {
        db.transaction((tx) =>
        {
            tx.executeSql("SELECT * FROM contact;", [],
                (_, { rows: { _array } }) => setListContact(_array));
        });
    }, [forceReload]);

    const handleReload = () => setForceReload(!forceReload);

    const AddContact = (newContact) =>
    {
        const { name, mobile, email } = newContact;
        db.transaction((tx) =>
        {
            tx.executeSql("INSERT INTO contact (name, mobile, email) VALUES  (?, ?, ?)", [name, mobile, email]);
        }, null, handleReload);
    }

    return {
        listContact,
        handleReload
    };
}