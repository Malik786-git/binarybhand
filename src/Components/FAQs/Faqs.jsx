import Question from "./Question"

const FAQsData = [
  {
    question: "How do i pay for the essentials or premium plan?",
     answer: "You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle."
  },
  {
    question: "We need to add new users to our team. How will that be billed?",
     answer: "You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle."
  },
  {
    question: "Do you offer discounts for non fropit organizations or educational institutions?",
     answer: "You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle."
  },
  {
    question: "Can i cancel my essentials or premium plan subscription at anytime?",
     answer: "You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle."
  },
  {
    question: "My teams wants to cancel it is subcription. How do we that? can we get a refund?",
     answer: "You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle."
  },
]



const Faqs = () => {

  return (
    <>
      <div className="about-wrapper mt-3">
        <img src="./img/faqswrapper.png" alt="aboutus" />
      </div>
      <div className="container about-content text-light">
        <div className="row">
          <div className="col-sm-12 col-10 mx-auto">
            <h4>FAQ'S</h4>
          </div>
          <div className="col-sm-12 col-10 mx-auto mb-5 pt-2">
            <h1>
            COMMONLY ASKED QUESTIONS
            </h1>
          </div>
          <div className="col-sm-12 col-10 mx-auto pt-5">
            {
              FAQsData.map((data, index)=>  <Question data={data}  key={index}/>
              )
            }
          </div>
         
        </div>
      </div>
    </>
  )
}


export default Faqs
