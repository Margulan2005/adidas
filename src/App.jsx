import React from 'react'
import './index.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Items from './Components/Items'
import Categories from './Components/Categories'

class App extends React.Component  {
  constructor(props) { 
    super(props)
    this.state = {
      currentItems: [],
      orders: [],
      items: [

        {
          id: 1,
          title: 'Samba OG',
          image: "./img/sambaogshoes.jpg",
          desc: "-----",
          category: "Shoes",
          price: "100"
        },
        {
          id: 2,
          title: 'Real Madrid',
          image: "./img/realmadrid.jpg",
          desc: "-----",
          category: "Real Madrid",
          price: "150"
        },
        {
          id: 3,
          title: 'Shorts',
          image: "./img/shorts.jpg",
          desc: "-----",
          category: "Shorts",
          price: "25"
        },
        {
          id: 4,
          title: 'Pants',
          image: "./img/pants.jpg",
          desc: "-----",
          category: "Pants",
          price: "80"
        },
        {
          id: 5,
          title: 'Fleece',
          image: "./img/fleece.jpg",
          desc: "-----",
          category: "Fleece",
          price: "85"
        },
        {
          id: 6,
          title: 'Hoodie',
          image: "./img/hoodie.jpg",
          desc: "-----",
          category: "Hoodie",
          price: "135"
        },

        {
          id: 7,
          title: 'Spezial',
          image: "./img/spezial.jpg",
          desc: "-----",
          category: "Shoes",
          price: "110"
        },

        {
          id: 8,
          title: 'Blue Shorts',
          image: "./img/blueshorts.jpg",
          desc: "-----",
          category: "Shorts",
          price: "23"
        },

        {
          id: 9,
          title: 'Red Hoodie',
          image: "./img/redhoodie.jpg",
          desc: "-----",
          category: "Hoodie",
          price: "95"
        },

        {
          id: 10,
          title: 'RMA Shorts',
          image: "./img/rmashorts.jpg",
          desc: "-----",
          category: "Real Madrid",
          price: "60"
        },

        {
          id: 11,
          title: 'Campus 00s',
          image: "./img/campus.jpg",
          desc: "-----",
          category: "Shoes",
          price: "110"
        },

        {
          id: 12,
          title: 'Gazelle',
          image: "./img/gazelle.jpg",
          desc: "-----",
          category: "Shoes",
          price: "120"
        },

        {
          id: 13,
          title: 'Away jersey',
          image: "./img/rmaorange.jpg",
          desc: "-----",
          category: "Real Madrid",
          price: "130"
        },

        {
          id: 14,
          title: 'Track Top',
          image: "./img/rmatrack.jpg",
          desc: "-----",
          category: "Real Madrid",
          price: "110"
        },

        {
          id: 15,
          title: 'Jersey',
          image: "./img/mentalhealth.jpg",
          desc: "-----",
          category: "Hoodie",
          price: "120"
        },

        {
          id: 16,
          title: 'ARS Hoodie',
          image: "./img/arsenal.jpg",
          desc: "-----",
          category: "Hoodie",
          price: "100"
        },

        {
          id: 17,
          title: 'Grey Shorts',
          image: "./img/greyshorts.jpg",
          desc: "-----",
          category: "Shorts",
          price: "40"
        },

        {
          id: 18,
          title: 'Green Shorts',
          image: "./img/greenshorts.jpg",
          desc: "-----",
          category: "Shorts",
          price: "42"
        },

        {
          id: 19,
          title: 'Boca Pants',
          image: "./img/bocapants.jpg",
          desc: "-----",
          category: "Pants",
          price: "90"
        },

        {
          id: 20,
          title: 'Sweatshirts',
          image: "./img/sweat.jpg",
          desc: "-----",
          category: "Fleece",
          price: "101"
        },
      ]
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.incrementCount = this.incrementCount.bind(this)
  }

  render(props)
   {
        return (
      <div className='Wrapper'>
        <Header orders = {this.state.orders} onDelete = {this.deleteOrder} onCount = {this.incrementCount}/>
        <Categories chooseCategory = {this.chooseCategory}/>
        <Items items = {this.state.currentItems} onAdd = {this.addToOrder}/>

        <Footer />

      </div>
    )
  }

  incrementCount = (id) => {
    this.setState((prevState) => ({
        items: prevState.orders.map(item => 
            item.id === id ? { ...item, count: item.count + 1 } : item
        )
    }));
}

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el =>
      el.id !== id
    )})
  }
  addToOrder(item){
    let arrayId = false
    this.state.orders.map(el => {
      if(el.id === item.id) {
        arrayId = True
      }
    })
    this.setState({orders: [...this.state.orders,item]})
  }
  chooseCategory(category) {
    if (category === 'All') {
      this.setState({ currentItems: this.state.items });
    } else {
      this.setState({ currentItems: this.state.items.filter(el => el.category === category) });
    }
  }
  componentDidMount() {
    const orders = JSON.parse(localStorage.getItem('orders'));
    if (orders) {
      this.setState({ orders });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.orders !== this.state.orders) {
      localStorage.setItem('orders', JSON.stringify(this.state.orders));
    }
  }
}

export default App