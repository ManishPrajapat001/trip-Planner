import Card from "./Card";
function Tours({tours,removeTour}){
    return(
        <div className="container">
            <div>
                <h2 className="title"> Plan with Manish</h2>
            </div>

            <div className="cards">
            {/* yeahbnhi krrnA wale */}
                {/* <card></card>
                <card></card>
                <card></card>
                <card></card> */}

                {
                    tours.map( (tours)=> {
                        return <Card key={tours.id} {...tours} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Tours; 