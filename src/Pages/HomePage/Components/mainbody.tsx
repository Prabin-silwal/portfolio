import NavBar from "./navBar";
export default function MainBody() {
    return (
        <div>
            <NavBar></NavBar>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 }}>
            <div className="ld_introduction">
               <h1>Hi, I'm Prabin</h1> 
               <h4>A Learner & Developer</h4>
               <h6>I'm always trying to bring real value and define problems with my designs. Welcome to my portfolio</h6>
               <button> CHECK OUT MY WORK</button>
            </div>
            <div className="ld_showcase">


                <img src="#" alt="multiple images are stacked"/> 
            </div>
            
        </div>
        </div>
    );
}