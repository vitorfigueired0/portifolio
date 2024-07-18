import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {

  return (
    <header className="text-white bg-slate-950 h-20 flex">
      
      <button className='px-0.5 mx-1.5 inline-block'>
        <MenuIcon fontSize='large'/>
      </button>

    </header>
  )
}

