import './list.scss'
import { listData } from "../../lib/dummydata";
import Card from '../card/Card';


function List(){
  return (
    <div className='list'>
      {listData.map(item => (
        <Card key={item} item={item}/>
      ))}
    </div>
  )
}

export default List