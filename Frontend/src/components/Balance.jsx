export const Balance = ({ value }) => {
    // Format the value with commas for thousands separators and currency formatting
    const formattedBalance = value.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
    });

    return (
        <div className="flex">
            <div className="font-bold text-lg">Your balance</div>
            <div className="font-semibold ml-4 text-lg">{formattedBalance}</div>
        </div>
    );
};
