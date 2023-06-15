import styles from "./Content.module.scss";
// import Month from "./Month";

function Content(){
    return(
        <div className="flex-fill container p-10">
           <div className={`card p-20 ${styles.contentcart}`}>
                <div className="rectangle"></div>
            </div>
            
        </div>
    )
}

export default Content;