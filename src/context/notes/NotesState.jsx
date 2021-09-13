import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NotesState = (props) => {
  const hardNotes = [
    {
      _id: "613c69338af945151d7ab544",
      user: "613c4744f4b2f133b78a44fc",
      title: "zainu Jind",
      description: "Hello, zain khan please dear wake up! updated",
      tage: " updated first note",
      date: "2021-09-11T08:30:43.761Z",
      __v: 0,
    },
    {
      _id: "613c695d8af945151d7ab548",
      user: "613c4744f4b2f133b78a44fc",
      title: "Amir Mirani",
      description: "Hello, amir please dear wake up! updated",
      tage: " updated first note",
      date: "2021-09-11T08:31:25.836Z",
      __v: 0,
    },
    {
      _id: "613c760abc3d3a6f91b5465f",
      user: "613c4744f4b2f133b78a44fc",
      title: "Aftab Mirani",
      description: "Hello, aftab khan please dear wake up! updated",
      tage: "aftab notes",
      date: "2021-09-11T09:25:30.818Z",
      __v: 0,
    },
    {
      _id: "613c695d8af945151d7ab548",
      user: "613c4744f4b2f133b78a44fc",
      title: "Amir Mirani",
      description: "Hello, amir please dear wake up! updated",
      tage: " updated first note",
      date: "2021-09-11T08:31:25.836Z",
      __v: 0,
    },
    {
      _id: "613c760abc3d3a6f91b5465f",
      user: "613c4744f4b2f133b78a44fc",
      title: "Aftab Mirani",
      description: "Hello, aftab khan please dear wake up! updated",
      tage: "aftab notes",
      date: "2021-09-11T09:25:30.818Z",
      __v: 0,
    },
    {
      _id: "613c695d8af945151d7ab548",
      user: "613c4744f4b2f133b78a44fc",
      title: "Amir Mirani",
      description: "Hello, amir please dear wake up! updated",
      tage: " updated first note",
      date: "2021-09-11T08:31:25.836Z",
      __v: 0,
    },
    {
      _id: "613c760abc3d3a6f91b5465f",
      user: "613c4744f4b2f133b78a44fc",
      title: "Aftab Mirani",
      description: "Hello, aftab khan please dear wake up! updated",
      tage: "aftab notes",
      date: "2021-09-11T09:25:30.818Z",
      __v: 0,
    },
    {
      _id: "613c695d8af945151d7ab548",
      user: "613c4744f4b2f133b78a44fc",
      title: "Amir Mirani",
      description: "Hello, amir please dear wake up! updated",
      tage: " updated first note",
      date: "2021-09-11T08:31:25.836Z",
      __v: 0,
    },
    {
      _id: "613c760abc3d3a6f91b5465f",
      user: "613c4744f4b2f133b78a44fc",
      title: "Aftab Mirani",
      description: "Hello, aftab khan please dear wake up! updated",
      tage: "aftab notes",
      date: "2021-09-11T09:25:30.818Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(hardNotes);

  // Add a NEW note
  const addNote = (title, description, tage) => {
    // TODO: 'API calling'
    const newNote = {
      _id: "613c760abc3d3a6f91b5465f",
      user: "613c4744f4b2f133b78a44fc",
      title: title,
      description: description,
      tage: tage,
      date: "2021-09-11T09:25:30.818Z",
      __v: 0,
    };

    // add note to previous note list with the help of concat method
    setNotes(notes.concat(newNote));
  };

  // Delete an existing note
  const deleteNote = (id) => {
    // TODO: API calls

    // show the existing notes after perform the delete operation
    const newNotes = notes.filter((noteItem) => {
      return noteItem._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit an existing note
  const editNote = () => {};

  return (
    <>
      <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
        {props.children}
      </NoteContext.Provider>
    </>
  );
};

export default NotesState;
