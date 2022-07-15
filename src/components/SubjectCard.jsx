import '../styles/card.scss';
import { Messages } from "../messages" 

function SubjectCard(props) {
    return (
        <div
            className=""
            onClick={() => props.onClick(props.subject.toLowerCase())}
        >
            <div class="wrapper">
                    <div class="container">
                        <div class="top" style={{background: `url(${props.imgSrc}) no-repeat center center`, backgroundSize: 'contain'}}></div>
                        <div class="bottom">
                        <div class="left">
                            <div class="details">
                            </div>
                            <div class="buy"><i class="material-icons"></i></div>
                        </div>
                            <h1>{props.subject}</h1>
                        </div>
                    </div>
                    <div class="inside">
                        <div class="icon"><i class="material-icons">{Messages.explanation}</i></div>
                        <div class="contents">
                        <table>
                            <tr>
                            <th>anythingg</th>
                            <th>whatever</th>
                            </tr>
                            <tr>
                            <td>3000mm</td>
                            <td>4000mm</td>
                            </tr>
                            <tr>
                            <th>Something</th>
                            <th>Something</th>
                            </tr>
                        </table>
                        </div>
                    </div>
                </div>
            {/* <div className="">
                <img
                    src={props.imgSrc}
                    alt={props.imgAlt}
                    width="180"
                    height="180"
                />
            </div>
            <h2 className="">
                {props.subject}
            </h2> */}
        </div>
    );
}

export default SubjectCard;