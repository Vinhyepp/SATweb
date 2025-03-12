import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebase';

function ExerciseDetail() {
  const { id } = useParams();
  const [questions, setQuestions] = useState(Array(44).fill({ text: '', image: null }));

  const handleInputChange = (index, type, value) => {
    const newQuestions = [...questions];
    newQuestions[index][type] = value;
    setQuestions(newQuestions);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await db.collection('exercises').doc(id).set({ questions });
      console.log('Questions saved successfully');
    } catch (error) {
      console.error('Error saving questions:', error);
      alert('Failed to save questions. Please try again.');
    }
  };

  return (
    <div>
      <h2>Exercise {id}</h2>
      <p>Details for exercise {id} will be displayed here.</p>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={index}>
            <label>Question {index + 1}</label>
            <input
              type="text"
              placeholder="Enter question text"
              value={question.text}
              onChange={(e) => handleInputChange(index, 'text', e.target.value)}
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleInputChange(index, 'image', e.target.files[0])}
            />
          </div>
        ))}
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default ExerciseDetail;
