import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from "@/components/ui/label"
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import reactIcon from '@/assets/react.svg'
import jsPDF from 'jspdf'


export default function heroSection() {   
    
    var encryptedMessage = ''

    const handleEncryption = () => {
        var keyString = document.getElementById('key').value;
        var message = document.getElementById('message').value;
    
        // Convert key string to a shift value by summing ASCII values of the characters
        var key = 0;
        for (var i = 0; i < keyString.length; i++) {
            key += keyString.charCodeAt(i);
        }
    
        // Ensure the shift stays within the range of printable characters
        key = key % 94; // Using 94 to limit shift within printable character range
    
        for (i = 0; i < message.length; i++) {
            var charCode = message.charCodeAt(i);
            
            // Apply encryption only to printable characters (ASCII 32 to 126)
            if (charCode >= 32 && charCode <= 126) {
                var newCharCode = ((charCode - 32 + key) % 94) + 32; // Shift character within printable range
                encryptedMessage += String.fromCharCode(newCharCode);
            } else {
                // If it's not a printable character, just append it without encryption
                encryptedMessage += message[i];
            }
        }
    
        console.log("Encrypted Message: ", encryptedMessage);

        var inputState = document.getElementById('input-state')
        var outputState = document.getElementById('output-state')
        inputState.style.display='none'
        outputState.style.display='flex'

    }

    const handlePDFGeneration = () => {
        var key = document.getElementById('key').value;
        var message = document.getElementById('message').value;
    
        const pdf = new jsPDF();

        // Title Settings
        pdf.setTextColor('#0F172A')
        pdf.setFontSize(30);
        pdf.text('Loki', 100, 30);
        
        //Key Settings
        pdf.setFontSize(19);
        pdf.text('Key', 20, 50);
        pdf.setFontSize(14);
        pdf.setTextColor('#7F8693')
        pdf.text(key, 20, 60);
        
        // Message Settings
        pdf.setFontSize(19);
        pdf.setTextColor('#0F172A')
        pdf.text('Message', 20, 80);
        pdf.setFontSize(14);
        pdf.setTextColor('#7F8693')
        pdf.text(message, 20, 90);
        
        // Password Settings
        pdf.setFontSize(19);
        pdf.setTextColor('#0F172A')
        pdf.text('Generated Password', 20, 110);
        pdf.setFontSize(14);
        pdf.setTextColor('#7F8693')
        pdf.text(encryptedMessage, 20, 120);

        // Date Settings
        pdf.setFontSize(16);
        let currentDate = new Date().toLocaleDateString();
        pdf.text(currentDate, 20, 280);
    
        // Save the PDF
        pdf.save('GeneratedPassword.pdf');
    }

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(encryptedMessage).then(() => {
            console.log('Encrypted message copied to clipboard');

            alert('Copied to clipboard.')

        }, (err) => {
            console.error('Could not copy text: ', err);
        });
    };


    return (

        <div className='flex flex-col justify-center items-center max-sm:gap-[2rem] max-sm:pt-[2rem]'>

            <Badge>
                <div className='p-[0.3rem] flex'>
                    <p>Made with React.js</p>
                    <img src={reactIcon} alt="React Icon" className='max-h-4 ml-2' />                    
                </div>
            </Badge>

            <h1 className='text-[#0F172A] font-bold text-4xl mb-[1rem] w-[50%] text-center max-sm:w-[90%] '>Too lazy to create a secure password?</h1>

            <Card className='my-[1rem]' id='input-state'>
                <CardHeader>
                    <CardTitle>Let Loki do it for you</CardTitle>
                    <CardDescription>Fill in the fields to generate your password.</CardDescription>
                </CardHeader>

                <CardContent  className='space-y-3'>
                    <div className='flex items-center'>
                        <Label htmlFor="key" className='w-[40%]'>Key</Label>
                        <Input name='key' id='key' placeholder='Eg. For Fenix'/>                        
                    </div>

                    <div className='flex items-center'>
                        <Label htmlFor="message" className='w-[40%]'>Message</Label>
                        <Input name='message' id='message' placeholder='Eg. I hate ISUTC'/>  
                    </div>

                  
                </CardContent>

                <CardFooter className= 'flex justify-end items-center'>
                    <Button id='generate-btn' onClick={handleEncryption}>Generate</Button>
                </CardFooter>
            </Card>

            <Card className='my-[1rem] flex flex-col hidden my-[4.62rem]' id='output-state'>
                <CardHeader>
                    <CardTitle>Yep, securely done!</CardTitle>
                    <CardDescription>Your password has been criptographied successfuly criptographied.</CardDescription>
                </CardHeader>

                <CardFooter className= 'flex justify-end items-center gap-[1rem]'>
                    <Button id='copy-btn' variant="outline" onClick={handleCopyToClipboard}>Copy</Button>
                    <Button id='download-btn' onClick={handlePDFGeneration}>Download</Button>
                </CardFooter>
            </Card>

            


            <p className='text-[#64748B] w-[50%] text-center mt-2 max-sm:w-[90%]'>This project incorporated ideologies learned during the lectures of Information Security and Communications.</p>

        </div>

    )
}