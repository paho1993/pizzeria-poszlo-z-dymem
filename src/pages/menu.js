import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const MenuPage = () => (
  <Layout>
    <SEO title="Home" />
    <div id="restaurant-menu">
      <div class="container">
        <div class="section-title text-center">
          <h2>Menu</h2>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6">
            <div class="menu-section">
              <h2 class="menu-section-title">Breakfast & Starters</h2>
              <div class="menu-item">
                <div class="menu-item-name">Tortellini Skewers</div>
                <div class="menu-item-price"> $9 </div>
                <div class="menu-item-description">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                  sed dapibus leo nec ornare diam.{" "}
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Fried Ravioli</div>
                <div class="menu-item-price"> $7 </div>
                <div class="menu-item-description">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                  sed dapibus leo nec ornare diam.{" "}
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Wild Mushroom Arancini</div>
                <div class="menu-item-price"> $9 </div>
                <div class="menu-item-description">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                  sed dapibus leo nec ornare diam.{" "}
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Mozzarella Sticks</div>
                <div class="menu-item-price"> $10 </div>
                <div class="menu-item-description">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                  sed dapibus leo nec ornare diam.{" "}
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <div class="menu-section">
              <h2 class="menu-section-title">Main Course</h2>
              <div class="menu-item">
                <div class="menu-item-name">Roast Stuffed Chicken</div>
                <div class="menu-item-price"> $18 </div>
                <div class="menu-item-description">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                  sed dapibus leo nec ornare diam.{" "}
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Chicken & Mushroom Pasta</div>
                <div class="menu-item-price"> $20 </div>
                <div class="menu-item-description">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                  sed dapibus leo nec ornare diam.{" "}
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Beef Lasagne</div>
                <div class="menu-item-price"> $14 </div>
                <div class="menu-item-description">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                  sed dapibus leo nec ornare diam.{" "}
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Chicken Goujons</div>
                <div class="menu-item-price"> $19 </div>
                <div class="menu-item-description">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                  sed dapibus leo nec ornare diam.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-6">
            <div class="menu-section">
              <h2 class="menu-section-title">Dinner</h2>
              <div class="menu-item">
                <div class="menu-item-name">Sesame-Ginger Beef</div>
                <div class="menu-item-price"> $15 </div>
                <div class="menu-item-description">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                  sed dapibus leo nec ornare diam.{" "}
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Crispy Fried Chicken</div>
                <div class="menu-item-price"> $17 </div>
                <div class="menu-item-description">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                  sed dapibus leo nec ornare diam.{" "}
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Mongolian Shrimp & Broccoli</div>
                <div class="menu-item-price"> $18 </div>
                <div class="menu-item-description">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                  sed dapibus leo nec ornare diam..{" "}
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Spicy Coconut Salmon</div>
                <div class="menu-item-price"> $20 </div>
                <div class="menu-item-description">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                  sed dapibus leo nec ornare diam.{" "}
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <div class="menu-section">
              <h2 class="menu-section-title">Desserts</h2>
              <div class="menu-item">
                <div class="menu-item-name">Chocolate Mud Cake</div>
                <div class="menu-item-price"> $11 </div>
                <div class="menu-item-description">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                  sed dapibus leo nec ornare diam.{" "}
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Bourbon-Pecan Tart</div>
                <div class="menu-item-price"> $14 </div>
                <div class="menu-item-description">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                  sed dapibus leo nec ornare diam.{" "}
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Texas Sheet Cake</div>
                <div class="menu-item-price"> $15 </div>
                <div class="menu-item-description">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                  sed dapibus leo nec ornare diam.{" "}
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Vanilla Cheesecake</div>
                <div class="menu-item-price"> $18 </div>
                <div class="menu-item-description">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis
                  sed dapibus leo nec ornare diam.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default MenuPage
