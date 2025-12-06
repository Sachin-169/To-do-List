import React,{useState} from "react";

function Todo() {
  const [task,setTask]=useState("");
  const [list,setList]=useState([]);

  function addTask() {
    if(task.trim()==="") return;

    setList([...list,task]);
  }

  return(
    <div
      style={{
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:"hsla(205, 100%, 86%)",
      }}
    >
      <div
        style={{
          background:"#87cefa",
          width:"350px",
          padding:"20px",
          border:"4px solid #333",
          borderRadius:"6px",
          boxShadow:"0px 4px 10px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{textAlign:"center",marginBottom:"10px",color:"#003366"}}>
          Todo List
        </h2>

        <div style={{ display:"flex"}}>
          <input
            type="text"
            value={task}
            placeholder="Enter The Task"
            onChange={(e) =>setTask(e.target.value)}
            style={{
              padding:"10px",
              width:"70%",
              border:"none",
              borderRadius:"4px",
              marginRight:"10px",
            }}
          />

          <button
            onClick={addTask}
            style={{
              padding:"10px 20px",
              background:"#0059ff",
              color:"white",
              border:"none",
              borderRadius:"4px",
              cursor:"pointer",
            }}
          >
            add
          </button>
        </div>

        <div style={{marginTop:"20px"}}>
          {list.map((item, index) =>(
            <p
              key={index}
              style={{
                background:"#bfe5ff",
                padding:"10px",
                borderRadius:"6px",
                margin:"8px 0",
                display:"flex",
                justifyContent:"space-between",
                alignItems:"center",
              }}
            >
              {item}

              <button
                onClick={()=>setList(list.filter((_, i) => i !== index))}
                style={{
                  background:"red",
                  border:"none",
                  color:"white",
                  padding:"4px 8px",
                  borderRadius:"4px",
                  cursor:"pointer",
                }}
              >
                X
              </button>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todo;