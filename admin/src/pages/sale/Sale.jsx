import './sale.css';

export default function Sale() {
  return (
    <div className="sale">
      <div className="saleTop">
        <div className="saleContainerTitle">
          <h1 className="saleTitle">Sale</h1>
        </div>
      </div>
      <div className="saleBottom">
        <div className="saleLeft">
          <img
            src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&w=500"
            alt=""
            className="saleImg"
          />
        </div>
        <div className="saleRight">
          <div className="saleItem">
            <span className="saleTitle">Product:</span>
            <span className="saleName">Apple Airpods</span>
          </div>
          <div className="saleItem">
            <span className="saleTitle">Customer:</span>
            <span className="saleName">Anna Becker</span>
          </div>
          <div className="saleItem">
            <span className="saleTitle">Total:</span>
            <span className="saleName">1</span>
          </div>
          <div className="saleItem">
            <span className="saleTitle">Status:</span>
            <span className="saleName">Approved</span>
          </div>
          <div className="saleItem">
            <span className="saleTitle">Amount:</span>
            <span className="saleName">$123,45</span>
          </div>
        </div>
      </div>
    </div>
  )
}
