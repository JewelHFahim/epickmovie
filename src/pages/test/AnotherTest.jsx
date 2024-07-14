
const AnotherTest = () => {

  const startHLS = async () => {
    try {
        const response = await fetch('http://localhost:3001/start-hls');
        if (response.ok) {
            console.log('HLS stream started');
        } else {
            console.error('Failed to start HLS stream');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

console.log(startHLS())

  return (
    <div>
      <header className="App-header">
                <h1>HLS Stream</h1>
                <button onClick={startHLS}>Start HLS Stream</button>
            </header>
    </div>
  );
};

export default AnotherTest;
