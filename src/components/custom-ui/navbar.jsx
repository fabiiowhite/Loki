import logo from '@/assets/Loki.svg'
import github from '@/assets/Github.svg'

export default function navbar() {
    return (
        <div className='navbar flex justify-between py-[1rem]'>
            <img src={logo} alt="Loki" />  

            <a target='_blank' href="https://github.com/fabiiowhite">
                <img src={github} alt="Gitub" />                  
            </a>        
        </div>
    )
}