import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [Feedback, setFeedback] = useState([
    {
      id: 1,
      text: "this is feedback item1",
      rating: 1,
    },
    {
      id: 2,
      text: "this is feedback item2",
      rating: 10,
    },
    {
      id: 3,
      text: "this is feedback item3",
      rating: 8,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const updateFeedback=(id,upItem)=>{
    setFeedback(Feedback.map(item=>(item.id===id?{...item,...upItem}:item)))
    setFeedbackEdit(feedbackEdit.edit=false)
  }

  const deleteFeedback = (id) => {
    if (window.confirm("are u sure u want to delete")) {
      setFeedback(Feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...Feedback]);
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        Feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
