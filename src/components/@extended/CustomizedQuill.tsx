import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  toolbarContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(2),
    backgroundColor: '#f2f2f2'
  },
  editorContainer: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  sendButton: {
    marginLeft: theme.spacing(2)
  }
}));

interface CustomizedQuillProps {
  value: string;
  onChange: (value: string) => void;
}

const CustomizedQuill = (props: CustomizedQuillProps) => {
  const classes = useStyles();
  const [content, setContent] = useState('');

  const handleQuillChange = (event: any) => {
    setContent(event.target.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.toolbarContainer}>
        {/* Add your desired toolbar buttons here */}
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-underline" />
        <button className="ql-strike" />
        {/* Add your send button here */}
        <button className={`${classes.sendButton} send-button`}>Send</button>
      </div>
      <div className={classes.editorContainer}>
        <ReactQuill value={content} onChange={(event: any) => handleQuillChange} />
      </div>
    </div>
  );
};

export default CustomizedQuill;
