import './App.css';
import React from 'react';
import Cart from './Cart'; 
import * as firebase from 'firebase'
class App extends React.Component {

  constructor() {
    super()
    this.state = {
      products: [],
      loading:true  
    }
    this.db=firebase.firestore()
  }
  
  componentDidMount(){
    this.db
    .collection('products') 
    .onSnapshot((snapshot)=>{ 
      var products= snapshot.docs.map((doc)=>{ 
         const data=doc.data();
         data['id']=doc.id;
         console.log('doc.id',data.id)
          return data;
      })
     
      this.setState({
        products,
        loading:false,
      })
    })
  }
 
  onIncrease = (pro) => { 
    const { products } = this.state 
    const index = products.indexOf(pro);  
  const docref=this.db.collection('products').doc(products[index].id)
  
  docref.update({
    qty:products[index].qty+1
  }).then(()=>{
    console.log('update succccessfully');
  }).catch((err)=>{
    console.error(err);
  })
 
  }

  onDecrease = (pro) => {
    console.log('it click on', pro);
    const { products } = this.state
    const index = products.indexOf(pro);

    if (products[index].qty > 1) {
      const docref=this.db.collection('products').doc(products[index].id)

      docref.update({
        qty:products[index].qty-1
      }).then(()=>{
        console.log('update succccessfully');
      }).catch((err)=>{
        console.error(err);
      })
    }

  }

  DeleteItem = (id) => {
    console.log('call to delete item');
    const { products } = this.state;


    // const Items = products.filter((item) => item.key !== key)  // [{}] it return the new array
    const docref=this.db.collection('products').doc(id)

    docref.delete()
    .then(()=>{
      console.log('DELETED SUCCESSFULLY');
    })
    .catch(()=>{
      console.log('error during deletion');
    })
   
  }

  render() {
   const {products,loading}=this.state 
  //  console.log(products.id);
    return (
      <div className="App"> 
            <Cart
              products={products}  
              onIncrease={this.onIncrease}
              onDecrease={this.onDecrease}
              DeleteItem={this.DeleteItem}
            /> 
            {loading && <h1>Loading product ...</h1>}
            <div><h1>Total :</h1></div>
       </div>
    );
  }

}

export default App;
