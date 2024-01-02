import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import Notes from "./components/Notes";
import { NoteObject } from "./models/note";

function App() {
  const [notes, setNotes] = useState<NoteObject[]>([]);

  useEffect(() => {
    if (sessionStorage.getItem("notes")) {
      setNotes(JSON.parse(sessionStorage.getItem("notes") as string));
    }
  }, []);

  const addNotes = (note: NoteObject) => {
    setNotes([note, ...notes]);
    sessionStorage.setItem("notes", JSON.stringify([notes, ...notes]));
  };

  const deleteNote = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    sessionStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <>
      <Header />
      <Box>
        <CreateNote addNotes={addNotes} />
        <Notes notes={notes} deleteNote={deleteNote} />
      </Box>
    </>
  );
}

export default App;
