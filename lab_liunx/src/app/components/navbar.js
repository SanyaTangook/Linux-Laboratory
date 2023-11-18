"use client";

import { Navbar } from "flowbite-react";
import { Avatar, Dropdown } from "flowbite-react";

function navbar() {
  return (
    <main>
      <Navbar fluid={true} rounded={true} >
        <Navbar.Brand href="/">
          <img
            src="https://www.kmutnb.ac.th/KMUTNB/media/kmutnb/images/kmutnb_index_Logo.png"
            className="mr-3 h-10 sm:h-9"
            alt="Linux Lab"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Linux Lab
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link className="text-xl" href="/" active={true}> Home </Navbar.Link>
          <Navbar.Link className="text-xl" href="/Lab"> Lab </Navbar.Link>
          <Navbar.Link className="text-xl">
            <Dropdown
              label={
                <Avatar
                  alt="User settings"
                  img="https://scontent.fbkk29-5.fna.fbcdn.net/v/t39.30808-6/257260940_1830183127180824_2824375852873591847_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9FP-GpmrM84AX9fgU4S&_nc_ht=scontent.fbkk29-5.fna&oh=00_AfAUjOU0YQE1AUBrmP_917A0CNK-ksyeqsgcOdGedSoQCQ&oe=655D3283"
                  rounded
                />
              }
              arrowIcon={false}
              inline
            >
              <Dropdown.Header>
                <span className="block text-sm">Sanya Tangsook</span>
                <span className="block truncate text-sm font-medium">
                  test@test.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </main>
  );
}

export default navbar;
