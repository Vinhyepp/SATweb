import React from 'react';
import { Link } from 'react-router-dom';

function ExerciseList() {
  const exercises = [
    { id: 1, title: 'Exercise 1' },
    { id: 2, title: 'Exercise 2' },
    // Add more exercises here
  ];

  return (
    <div>
      <h2>Bài Tập Có Sẵn</h2>
      <ul>
        {exercises.map(exercise => (
          <li key={exercise.id}>
            <Link to={`/exercise/${exercise.id}`}>{exercise.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExerciseList;
