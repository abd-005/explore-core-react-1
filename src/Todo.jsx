// export default function ToDo(p){
//     return(
//         <div>
//             <p>Task: {p.taskName}</p>
//         </div>
//     )
// }

export default function ToDo({ task, isDone, duration }) {
  if (isDone) {
    return (
      <p>
        Done: {task} Duration: {duration}
      </p>
    );
  } else {
    return (
      <p>
        To be done: {task} Duration: {duration}
      </p>
    );
  }
}
