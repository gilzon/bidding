// import React from "react";

// const buyerDashboard = () => {
//   return (
//     <>
//       <section className="dash">
//         <div className="container-fluid">
//           <div className="row d-flex justify-content-around text-center">
//             <h2>Buyer Dashboard </h2>
//             <hr></hr>
//             <div className="col-6  sm-6  d-flex-column justify-content-between">
//               <div className="card ">
//                 <div className="card-header">All Lots</div>
//                 <div className="card-body"></div>
//               </div>
//             </div>
//             <div className="col-6  sm-6 d-flex-column justify-content-between">
//               <div className="card d-flex justify-content-between">
//                 <div className="card-header">Sold Lots</div>
//                 <div className="card-body"></div>
//               </div>
//             </div> 
           
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default buyerDashboard;

import React from "react";

const BuyerDashboard = () => {
  return (
    <>
      <section className="dash">
        <div className="container-fluid">
          <div className="row d-flex justify-content-around text-center">
            <h2>Buyer Dashboard</h2>
            <hr></hr>
            <div className="col-6 sm-6 d-flex-column justify-content-between">
              <div className="card">
                <div className="card-header">Ongoing Bids</div>
                <div className="card-body">List of your ongoing bids</div>
              </div>
            </div>
            <div className="col-6 sm-6 d-flex-column justify-content-between">
              <div className="card">
                <div className="card-header">Won Auctions</div>
                <div className="card-body">List of auctions you've won</div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-around text-center mt-5">
            <div className="col-6 sm-6 d-flex-column justify-content-between">
              <div className="card">
                <div className="card-header">Watchlist</div>
                <div className="card-body">
                  List of products you are interested in
                </div>
              </div>
            </div>
            <div className="col-6 sm-6 d-flex-column justify-content-between">
              <div className="card">
                <div className="card-header">Auction Notifications</div>
                <div className="card-body">
                  Notifications for auction updates
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BuyerDashboard;

