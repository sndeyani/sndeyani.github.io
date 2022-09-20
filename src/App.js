
function App() {

	const download = () => {
		fetch('Ani_Sndeyan_CV.pdf').then(response => {
			response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Ani_Sndeyan_CV.pdf';
                alink.click();
            })
		})
	}

	return (
		<div>
			
			<button onClick={download}>Download CV</button>	
		</div>
	);
}

export default App;
