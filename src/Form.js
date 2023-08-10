import React, { useState } from 'react';

const StockForm = () => {
  const [selectedStock, setSelectedStock] = useState('');
  const [userName, setUserName] = useState('');

  const handleStockChange = (e) => {
    setSelectedStock(e.target.value);
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Do something with selectedStock and userName, such as sending to backend

    // Reset form fields
    setSelectedStock('');
    setUserName('');
  };
}
  const stockOptions = ['AAPL', 'GOOGL', 'AMZN', 'MSFT', 'TSLA'];


function Form() {

    return (
        <div className="form-page">
            <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div>
                <label>Name:</label>
                <input type="text" />
                </div>
                <div>
                <label>Select a Stock:</label>
                <select value={selectedStock} onChange={handleStockChange}>
                    <option value="">Select a stock</option>
                    {stockOptions.map((stock, index) => (
                    <option key={index} value={stock}>
                        {stock}
                    </option>
                    ))}
                </select>
                </div>
                <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Form;