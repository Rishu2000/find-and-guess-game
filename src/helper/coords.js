export const clickedCoords = (pageX,pageY,coords) => {
  //coords = [x1,y1,x2,y2]
  return pageX > coords[0] && pageY > coords[1] && pageX < coords[2] && pageY < coords[3]
}