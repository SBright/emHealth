import img_emclass_logo from '../assets/images/emclass-logo.svg';

const New = () => {
    return(
        <div className='coming-soon-contain'>
            <div>
                <div>
                    <img src={img_emclass_logo}></img>
                </div>
                <div className='separate-line'>
                </div>
                <div className='coming-soon-title'>
                    Coming Soon
                </div>
            </div>
        </div>
    )
}
export default New;