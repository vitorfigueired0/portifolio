import MenuIcon from '@mui/icons-material/Menu';

export const Sidebar = ({ onClick }) => {
  const linksStyle = 'font-custom hover:text-lightMain cursor-pointer';

  return(
    <div className='bg-middleRed h-full w-1/6 z-50 absolute'>
      
      <button className='mx-8 mt-2 inline-block' onClick={onClick}>
        <MenuIcon 
          sx={{ 
            fontSize: 60, 
            color: '#0D0D0D',
            cursor: 'pointer',
            '&:hover': {
              color: '#BFA5A3'
            } 
          }} 
        />
      </button>

      <div className='flex flex-col mx-9 inline-block gap-5 mt-12 text-mainDark'>
        <a href='#' className={linksStyle}>home</a>
        <a href='#' className={linksStyle}>about me</a>
        <a href='#' className={linksStyle}>projects</a>
        <a href='#' className={linksStyle}>contact me</a>
      </div>
    </div>
  )
}