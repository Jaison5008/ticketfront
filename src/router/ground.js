import Card from 'react-bootstrap/Card';

function ImgOverlayExample() {
  return (
    <Card className="bg-dark text-blue" style={{margin:'20px'}} >
      <Card.Img  style={{height:'74vh'}} src="http://indiaongo.in/wp-content/uploads/2016/11/ma-chidambaram-stadium-layout-seats.jpg" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Chennai</Card.Title>
        <Card.Text>
          
        </Card.Text>
        <Card.Text></Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;