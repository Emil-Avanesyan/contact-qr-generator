import './App.css';
import QRCode from "react-qr-code";

function App() {
	const phoneNumber = '+37433022700';
	const email = 'avanesyan.emil2000@gmail.com';
	const contactName = 'Emil';
	const linkedin = 'https://www.linkedin.com/in/emil-avanesyan/';

	const contactInfo = `BEGIN:VCARD
									VERSION:3.0
									FN:${contactName}
									TEL:${phoneNumber}
									EMAIL:${email}
									X-SOCIALPROFILE;TYPE=linkedin:https://www.twitter.com/${linkedin}
									END:VCARD
									`;
	return (
		<div className='App'>
			<div style={{
				textAlign: 'center',
				backgroundColor: '#f0f0f0',
				padding: '20px',
				borderRadius: '10px',
				width: '256px'
			}}>
				<QRCode
					size={256}
					fgColor="#333333" // Color of the QR code squares
					bgColor="#ffffff" // Background color of the QR code
					level="H" // Error correction level: L, M, Q, H
					includeMargin={true} // Include white border around the QR code
					value={contactInfo}
					style={{height: 'auto', maxWidth: '100%', width: '100%'}}
					viewBox={`0 0 256 256`}
				/>
				<p style={{marginTop: '10px', fontFamily: 'Arial, sans-serif', fontSize: '14px'}}>Scan to add
					contact</p>
			</div>
		</div>
	);
}

export default App;
