import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
function Cardr(props){
    return (
      <div className="card"><Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={props.img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card></div>
        
      );
}
export default Cardr