// export default function ToDo(p){
//     return(
//         <div>
//             <p>Task: {p.taskName}</p>
//         </div>
//     )
// }
//-----------------------------------

// ---Way 1: normal if else---


// export default function ToDo({ task, isDone, duration }) {
//   if (isDone) {
//     return (
//       <p>
//         Done: {task} Duration: {duration}
//       </p>
//     );
//   } else {
//     return (
//       <p>
//         To be done: {task} Duration: {duration}
//       </p>
//     );
//   }
// }


// ---Way 2: normal if return(else)---

// export default function ToDo({taskName, isDone ,duration}) {
//     if(isDone === 'true'){
//         return (
//             <p>Done: {taskName} Duration: {duration}</p>
//         )
//     }
//         return <p>To be done: {taskName} Duration: {duration}</p>
// }

//  ---Way 3: Ternary--- 


// export default function ToDo({taskName, isDone ,duration}) {
//     return isDone ? <p>Done: {taskName} Duration: {duration}</p>
//     :
//     <p>To be done: {taskName} Duration: {duration}</p>
// }


//  ---Way 4: Ternary -> &&---


export default function ToDo({taskName, isDone ,duration}) {
    return isDone && <p>Done: {taskName} Duration: {duration}</p>
}


// 
