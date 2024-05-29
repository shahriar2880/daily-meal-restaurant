import {
  FaAd,
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaMoneyBill,
  FaPhone,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";

import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // get isadmin value from the database
  const [isAdmin, isLoading] = useAdmin();

  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-100">
        <ul className="menu p-4 gap-1 uppercase">
          {
          
          isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList>
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                  <FaBook></FaBook>
                  Manage Booking
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers>
                  All users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar>
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/userPayment">
                  <FaMoneyBill></FaMoneyBill>
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaAd></FaAd>
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaList></FaList>
                  My Booking
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          {/* Shared nav linkss*/}
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <MdRestaurantMenu />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaShoppingBag></FaShoppingBag>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaPhone></FaPhone>
              Contact
            </NavLink>
          </li>
        </ul>

        <ul className="menu p-4 gap-1 uppercase"></ul>
      </div>
      {/* Dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
