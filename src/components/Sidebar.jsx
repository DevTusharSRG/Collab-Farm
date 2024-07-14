import { FaTachometerAlt, FaRegSun, FaRegCalendarAlt, FaChevronRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='bg-[#4E73DF] h-screen px-[25px]'>
      <div className='px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
        <h1 className='text-white text-[20px] leading-[24px] font-extrabold cursor-pointer'>Admin panel</h1>
      </div>
      <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3]'>
        <FaTachometerAlt color='white' />
        <p className='text-[14px] leading-[20px] font-bold text-white'>Dashboard</p>
      </div>
      <div className='pt-[15px] border-b-[1px] border-[#EDEDED]/[0.3]'>
        <p className='text-[10px] font-extrabold leading-[16px] text-white/[0.4]'>INTERFACE</p>
        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
          <div className='flex items-center gap-[10px]'>
            <FaRegSun color='white' />
            <NavLink to="/admin/users" className='text-[14px] leading-[20px] font-normal text-white'>Landowners</NavLink>
          </div>
          <FaChevronRight color='white' />
        </div>
        {/* <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
          <div className='flex items-center gap-[10px]'>
            <FaRegChartBar color='white' />
            <NavLink to="/admin/users" className='text-[14px] leading-[20px] font-normal text-white'>Landowners</NavLink>
          </div>
          <FaChevronRight color='white' />
        </div> */}
        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
          <div className='flex items-center gap-[10px]'>
            <FaRegCalendarAlt color='white' />
            <NavLink to="/admin/contacts" className='text-[14px] leading-[20px] font-normal text-white'>Contacts</NavLink>
          </div>
          <FaChevronRight color='white' />
        </div>
        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
          <div className='flex items-center gap-[10px]'>
            <FaRegCalendarAlt color='white' />
            <NavLink to="/admin/properties" className='text-[14px] leading-[20px] font-normal text-white'>Properties</NavLink>
          </div>
          <FaChevronRight color='white' />
        </div>
        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
          <div className='flex items-center gap-[10px]'>
            <FaRegCalendarAlt color='white' />
            <NavLink to="/admin/applications" className='text-[14px] leading-[20px] font-normal text-white'>Applications</NavLink>
          </div>
          <FaChevronRight color='white' />
        </div>
        <div className='flex items-center justify-between gap-[10px] py-[15px] cursor-pointer'>
          <div className='flex items-center gap-[10px]'>
            <FaRegCalendarAlt color='white' />
            <NavLink to="/admin/services" className='text-[14px] leading-[20px] font-normal text-white'>Services</NavLink>
          </div>
          <FaChevronRight color='white' />
        </div>
      </div>
      
    </div>
  );
}

export default Sidebar;
