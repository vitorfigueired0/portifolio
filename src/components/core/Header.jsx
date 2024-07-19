import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {

  const linksStyle = 'font-custom hover:text-darkRed cursor-pointer'

  return (
    <header className="fixed w-full text-lg text-white bg-black h-20 flex items-center">

      <button className='px-0.5 mx-8 inline-block'>
        <MenuIcon sx={{ 
            fontSize: 60, 
            color: '#BF0A0A',
            cursor: 'pointer',
            '&:hover': {
              color: '#730710'
            } 
          }} 
        />
      </button>

      <div className='flex px-0.5 mx-1.5 ml-auto mr-8 gap-20 text-middleRed'>
        <a href='#' className={linksStyle}>home</a>
        <a href='#' className={linksStyle}>about me</a>
        <a href='#' className={linksStyle}>projects</a>
        <a href='#' className={linksStyle}>contact me</a>
      </div>
      
    </header>
  )
}

