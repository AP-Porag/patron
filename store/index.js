export const state = () => ({
  products: [
    {
      id: 1,
      category:"Fan",
      detail:"Steel,Aluminium",
      title: "36 inches celling Fan",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "fan-36.jpeg"
    },
    {
      id: 2,
      category:"Fan",
      detail:"Steel,Aluminium",
      title: "56 inches celling Fan",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "fan-56.jpeg"
    },
    {
      id: 3,
      category:"Gas Stove",
      detail:"Steel,Aluminium",
      title: "Double Burner Stove",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "stove-double-burner.jpeg"
    },
    {
      id: 4,
      category:"Gas Stove",
      detail:"Steel,Aluminium",
      title: "Single Burner Stove",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "stove-single-burner.jpeg"
    },
    {
      id: 5,
      category:"Stabilizer",
      detail:"700 VA,1100 VA,2200 VA",
      title: "700VA Stabilizer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "stabilizer.jpeg"
    },
    {
      id: 6,
      category:"Stabilizer",
      detail:"700 VA,1100 VA,2200 VA",
      title: "1100VA Stabilizer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "stabilizer.jpeg"
    },
    {
      id: 7,
      category:"Stabilizer",
      detail:"700 VA,1100 VA,2200 VA",
      title: "2200VA Stabilizer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "stabilizer.jpeg"
    },
  ]
})

export const mutations = {
  setRentalItem(state,payload){
    //state.myRentals.push(payload)
  }
}
export const actions = {
  addItemAction({state,commit},payload){
    let item = state.products.find(product => product.id == payload)
    commit('setRentalItem',item)
  },
}

export const getters = {
  getProductById: (state) => (id) => {
    return state.products.find(product => product.id == id)
  },
  getRentalItem(state){
    return state.myRentals
  }
}
