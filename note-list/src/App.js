import React, {useEffect, useState} from "react";
import './App.css';
import NoteList from "./components/NoteList";
import MyButton from "./UI/MyButton/MyButton";
const uniqid = require('uniqid')

function App() {
    const [notes, setNotes] = useState(
        JSON.parse(localStorage.getItem('notes') || [])
    )
    const create = () => {
        setNotes([{id: uniqid(), date: Date(), info: ''},...notes])
    }
    const [changeNote, setChangeNote] = useState(null)

    const saveChanges = () => {
        setChangeNote(null)
    }
    useEffect(() => {
        return (
        localStorage.setItem('notes', JSON.stringify(notes))
        )
    })
  return (
    <div className="App" onClick={() => saveChanges()}>
        <div className="container">
            <div className="add_note">
                <MyButton onClick={create}>Добавить заметку</MyButton>
            </div>
                <NoteList notes={notes} changeNote={changeNote} saveChanges={saveChanges} setChangeNote={setChangeNote} setNotes={setNotes}/>
        </div>
    </div>
  );
}

export default App;
