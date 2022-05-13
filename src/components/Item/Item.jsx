import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


export const Item = ({ product }) => {
  console.log(product)
  return (

<>
<Container>

<Card style={{ width: '18rem' }}>

  <Card.Img variant="top" src={product.img}/>
  <Card.Body>
  <Card.Title>{product.nombre}</Card.Title>
  <Card.Text>
     {product.descripcion}
     <p key={product.id}> </p>
     <p>Precio = {product.precio} </p>
    </Card.Text>
    <Button variant="primary">Ver detalle del producto</Button>

  </Card.Body> 

</Card>
</Container>
</>

 

  )
}

