export function OrderHeader() {
  return (
    <div className="order-header">
      <div className="order-header-left-section">
        <div className="order-date">
          <div className="order-header-label">Order Placed:</div>
          <div>August 12</div>
        </div>
        <div className="order-total">
          <div className="order-header-label">Total:</div>
          <div>$35.06</div>
        </div>
      </div>

      <div className="order-header-right-section">
        <div className="order-header-label">Order ID:</div>
        <div>27cba69d-4c3d-4098-b42d-ac7fa62b7664</div>
      </div>
    </div>
  );
}