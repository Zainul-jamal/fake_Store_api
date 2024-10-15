import React from 'react'

const Slider = () => {
  return (
<>


<div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  <div  className="container carousel-inner h-[100vh]">
    <div className="carousel-item active">
      <img  src="https://external-preview.redd.it/uEvuDrIsyWHwNl-YkGqttvC0wTwW_7BS7wYC8aPMYGc.jpg?auto=webp&s=dd0fb161cc3c9a95dc07b7925b2394489969ebe0" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1341375961/photo/daughter-shopping-with-father-in-supermarket.jpg?s=1024x1024&w=is&k=20&c=DdMGYJ8zJXumec5CCKXwjW4rCjdGhItbw_sQT4_YhWQ=" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://thumbs.dreamstime.com/z/supermarket-outlets-selling-clothing-stalls-entrance-sells-women-shopping-shenzhen-china-91904793.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>



</>
)
}

export default Slider