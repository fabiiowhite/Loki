import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from "@/components/ui/label"
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card"
import reactIcon from '@/assets/react.svg'

export default function heroSection() {
    return (
        <div className='flex flex-col justify-center items-center'>

            <Badge>
                <div className='p-[0.3rem] flex'>
                    <p>Made with React.js</p>
                    <img src={reactIcon} alt="React Icon" className='max-h-4 ml-2' />                    
                </div>
            </Badge>

            <h1 className='text-[#0F172A] font-bold text-4xl mb-[1rem] w-[50%] text-center'>Too lazy to create a secure password?</h1>

            <Card className='my-[1rem]'>
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

                <CardFooter className= 'flex flex-row-reverse'>
                    <Button>Generate</Button>
                </CardFooter>
            </Card>

            <p className='text-[#64748B] w-[45%] text-center mt-2'>This project incorporated ideologies learned during the lectures of Information Security and Communications.</p>


        </div>
    )
}