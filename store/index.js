export const state = () => ({
  products: [
    {
      id: 1,
      category:"Fan",
      title: "36 inches celling Fan",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "portfolio-details-1.jpg"
    },
    {
      id: 2,
      category:"Fan",
      title: "56 inches celling Fan",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "portfolio-details-2.jpg"
    },
    {
      id: 3,
      category:"Gas Stove",
      title: "SS Gas Stove",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "portfolio-details-3.jpg"
    },
    {
      id: 4,
      category:"Gas Stove",
      title: "Glass Gas Stove",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "portfolio-details-1.jpg"
    },
    {
      id: 5,
      category:"Stabilizer",
      title: "700VA Stabilizer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "portfolio-details-2.jpg"
    },
    {
      id: 6,
      category:"Stabilizer",
      title: "1100VA Stabilizer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "portfolio-details-3.jpg"
    },
    {
      id: 7,
      category:"Stabilizer",
      title: "2200VA Stabilizer",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis omnis blanditiis eos, vitae accusamus rem eveniet veritatis voluptas expedita exercitationem at enim perspiciatis alias culpa sint sapiente! Omnis debitis velit nesciunt ratione alias eius officia nobis illum tempora et est iusto maiores possimus, ad aperiam necessitatibus voluptas quis quod, ab soluta sequi voluptate quibusdam. Reiciendis saepe iusto id totam!Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "portfolio-details-1.jpg"
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
