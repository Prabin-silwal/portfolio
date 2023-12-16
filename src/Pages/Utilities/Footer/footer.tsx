import './footerCss.css';
export default  function Footer()
{
    const ColoredLine = ({ color , border}:any) => (
        <hr
            style={{
                
                color: color,
                backgroundColor: color,
                height: 2,
                border:border
            }}
        />
    );
return (
    <div className='dotted-line'>
        <div>
            <ColoredLine color="red" border="1px dotted "></ColoredLine>
        </div>
    <div className="footer">
        <div className="column1">
            Column1
        </div>
        <div className="column2">
            column2
        </div>
        <div className="column3"> column3</div>
        <div className="column4">
            column4
        </div>
    </div>
    </div>
);
}