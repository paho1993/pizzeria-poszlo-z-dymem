import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MenuPage = () => (
  <Layout>
    <SEO title="Nasze menu" />
    <div id="restaurant-menu">
      <div class="container">
        {/* <div class="section-title text-center" style={{ marginTop: "70px" }}>
          <h2>Menu</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit duis sed dapibus leonec.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit duis sed dapibus leonec.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit duis sed dapibus leonec.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit duis sed dapibus
            leonec.Lorem ipsum dolor sit amet, consectetur adipiscing elit duis
            sed dapibus leonec.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit duis sed dapibus leonec.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit duis sed dapibus leonec.
          </p>
        </div> */}
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="menu-section" style={{ marginTop: "70px" }}>
              <h2 class="menu-section-title">Pizza</h2>
              <div class="menu-item">
                <div class="menu-item-name"></div>
                <div class="menu-item-price">
                  40 <small>cm</small>
                </div>
                <div class="menu-item-price2">
                  32 <small>cm</small>
                </div>
                <div class="menu-item-description"></div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name" style={{ marginTop: "60px" }}>
                  Margherita
                </div>
                <div class="menu-item-price">24</div>
                <div class="menu-item-price2">17</div>
                <div class="menu-item-description">
                  sos pomidorowy, mozzarella
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Prosciutto</div>
                <div class="menu-item-price">28</div>
                <div class="menu-item-price2">22</div>
                <div class="menu-item-description">
                  sos pomidorowy, mozzarella, szynka
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Diavola</div>
                <div class="menu-item-price">29</div>
                <div class="menu-item-price2">23</div>
                <div class="menu-item-description">
                  sos pomidorowy, mozzarella, salami picante
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Hawai</div>
                <div class="menu-item-price">29</div>
                <div class="menu-item-price2">23</div>
                <div class="menu-item-description">
                  sos pomidorowy, mozzarella, szynka, ananas, kukurydza
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Monte Bianco</div>
                <div class="menu-item-price">29</div>
                <div class="menu-item-price2">23</div>
                <div class="menu-item-description">
                  mozzarella, por, śmietanka, gorgonzola
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Prosciutto e funghi</div>
                <div class="menu-item-price">30</div>
                <div class="menu-item-price2">24</div>
                <div class="menu-item-description">
                  sos pomidorowy, mozzarella, szynka, pieczarki
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Diavola e funghi</div>
                <div class="menu-item-price">31</div>
                <div class="menu-item-price2">25</div>
                <div class="menu-item-description">
                  sos pomidorowy, mozzarella, salami, pieczarki
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Spinaci</div>
                <div class="menu-item-price">31</div>
                <div class="menu-item-price2">25</div>
                <div class="menu-item-description">
                  sos pomidorowy, mozzarella, szpinak, pomidory suszone, ser
                  feta
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Tonno e cipolla</div>
                <div class="menu-item-price2">26</div>
                <div class="menu-item-price">33</div>
                <div class="menu-item-description">
                  sos pomidorowy, mozzarella, tuńczyk, oliwki czarne, czerwona
                  cebula
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Vegetariana</div>
                <div class="menu-item-price">33</div>
                <div class="menu-item-price2">26</div>
                <div class="menu-item-description">
                  sos pomidorowy, mozzarella, grillowane warzywa, bakłażan,
                  cukinia, papryka
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Montanara</div>
                <div class="menu-item-price">34</div>
                <div class="menu-item-price2">27</div>
                <div class="menu-item-description">
                  sos pomidorowy, mozzarella, salami łagodne, pieczarki, włoski
                  ser wędzony
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Pollo a spinaci</div>
                <div class="menu-item-price">34</div>
                <div class="menu-item-price2">27</div>
                <div class="menu-item-description">
                  sos pomidorowy, mozzarella, szpinak, kurczak, suszone
                  pomidory, czerwona cebula
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Ala Carbonara</div>
                <div class="menu-item-price">35</div>
                <div class="menu-item-price2">28</div>
                <div class="menu-item-description">
                  mozzarella, pieczarki, cebula czerwona, boczek, śmietanka,
                  parmezan, pomidorki koktajlowe
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Nduja</div>
                <div class="menu-item-price">35</div>
                <div class="menu-item-price2">28</div>
                <div class="menu-item-description">
                  sos pomidorowy,biała mozzarella , pasta nduja, cebula
                  czerwona, jalapeno, mascarpone
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Casereccia</div>
                <div class="menu-item-price">35</div>
                <div class="menu-item-price2">28</div>
                <div class="menu-item-description">
                  sos pomidorowy, mozzarella, włoska kiełbasa, gorgonzola,
                  czerwona cebula
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Quattro Formagi</div>
                <div class="menu-item-price">35</div>
                <div class="menu-item-price2">28</div>
                <div class="menu-item-description">
                  sos pomidorowy, mozzarella, gorgonzola, asiago, grana padano
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Capricciosa</div>
                <div class="menu-item-price">35</div>
                <div class="menu-item-price2">28</div>
                <div class="menu-item-description">
                  sos pomidorowy, mozzarella, szynka,oliwki czarne, pieczarki,
                  karczochy
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Carnivora</div>
                <div class="menu-item-price">36</div>
                <div class="menu-item-price2">29</div>
                <div class="menu-item-description">
                  sos pomidorowy, mozzarella, szynka, salami łagodne, salami
                  ostre
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Parma</div>
                <div class="menu-item-price">38</div>
                <div class="menu-item-price2">30</div>
                <div class="menu-item-description">
                  sos pomidorowy, mozzarella, szynka prosciutto, pomidorki
                  koktajlowe, rukola, płaty parmezanu
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Calzone Clasico</div>
                <div class="menu-item-price">-</div>
                <div class="menu-item-price2">25</div>
                <div class="menu-item-description">
                  sos pomidorowy, mozzarella, szynka, pieczarki
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Calzone Poszło z Dymem</div>
                <div class="menu-item-price2">28</div>
                <div class="menu-item-price">-</div>
                <div class="menu-item-description">
                  sos pomidorowy, szynka, salami ostre, gorgonzola
                </div>
              </div>
            </div>
          </div>{" "}
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="menu-section">
              <h2 class="menu-section-title">Dodatki</h2>
              <div class="menu-item">
                <div class="menu-item-name"></div>
                <div class="menu-item-price">
                  40 <small>cm</small>
                </div>
                <div class="menu-item-price2">
                  32 <small>cm</small>
                </div>
                <div class="menu-item-description"></div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name" style={{ marginTop: "60px" }}>
                  Warzywa
                </div>
                <div class="menu-item-price">3</div>
                <div class="menu-item-price2">2</div>
                <div class="menu-item-description">
                  Pomidorki koktajlowe, cebula czerwona, rukola, czosnek
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name" style={{ marginTop: "60px" }}>
                  Warzywa grillowane
                </div>
                <div class="menu-item-price">4</div>
                <div class="menu-item-price2">3</div>
                <div class="menu-item-description">
                  Grillowana papryka, cukinia, bakłażan
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Mięsa</div>
                <div class="menu-item-price">5</div>
                <div class="menu-item-price2">4</div>
                <div class="menu-item-description">
                  Salami łagodne, salami ostre, kurczak, boczek, saliccia, pasta
                  nduja, prosciutto cotto, prosciutto crudo
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Sery</div>
                <div class="menu-item-price">5,5</div>
                <div class="menu-item-price2">4,5</div>
                <div class="menu-item-description">
                  Mozzarella, gorgonzola, asiago, parmezan
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="menu-section">
              <h2 class="menu-section-title">Oliwa i sosy</h2>
              <div class="menu-item">
                <div class="menu-item-name">Sos pomidorowy</div>
                <div class="menu-item-price">2</div>
                <div class="menu-item-description"></div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Sos meksykański</div>
                <div class="menu-item-price">2</div>
                <div class="menu-item-description"></div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Sos czosnkowy</div>
                <div class="menu-item-price">2</div>
                <div class="menu-item-description"></div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Oliwa czosnkowa</div>
                <div class="menu-item-price">2</div>
                <div class="menu-item-description"></div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Oliwa pikantna</div>
                <div class="menu-item-price">2</div>

                <div class="menu-item-description"></div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="menu-section">
              <h2 class="menu-section-title">Sałatki</h2>
              <div class="menu-item">
                <div class="menu-item-name">Cesar</div>
                <div class="menu-item-price">18</div>
                <div class="menu-item-description">
                  Sałata rzymska, grillowany kurczak, bekon, płatki parmezanu,
                  pomidorki koktajlowe, czerwona cebula, sos cezar, grzanki
                </div>
              </div>
            </div>
            <div
              class="menu-section-additions section-title text-center"
              style={{ justifyContent: "center" }}
            >
              Przy zamówieniu na wynos doliczamy koszt opakowania:
              <div>Pizza 30cm - 1,3 zł</div>
              <div>Pizza 40cm - 1,8 zł</div>
              <div>Sałata - 1 zł</div>
              <div>Calzone- 2 zł</div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="menu-section" style={{ marginTop: "80px" }}>
              <h2 class="menu-section-title">Pasta</h2>
              <div class="menu-item">
                <div class="menu-item-name">Spaghetti al pomodoro</div>
                <div class="menu-item-price">16</div>
                <div class="menu-item-description">
                  spaghetti, sos pomidorowy świeża,mozzarella bazylia
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Spaghetti Poszło z dymem</div>
                <div class="menu-item-price">17</div>
                <div class="menu-item-description">
                  spaghetti,oliwa czosnek, pietruszka,peperoncino, anchois,
                  pomidorki koktajlowe
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Penne pollo e zucchine</div>
                <div class="menu-item-price">18</div>
                <div class="menu-item-description">
                  penne,kurczak,cukinia, śmietanka, parmezan
                </div>
              </div>
              {/* <div class="menu-item">
                <div class="menu-item-name">Lasagna</div>
                <div class="menu-item-price"> 18 </div>
                <div class="menu-item-description">
                  Lazagne, sos bologneze, mozzarella, parmezan, beszamel
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Melanzana alla parmigiana</div>
                <div class="menu-item-price"> 18 </div>
                <div class="menu-item-description">
                  Lazagne, bakłażan, mozzarella, parmezan, sos pomidorowy,
                  bazylia
                </div>
              </div> */}
              <div class="menu-item">
                <div class="menu-item-name">Carbonara</div>
                <div class="menu-item-price"> 19 </div>
                <div class="menu-item-description">
                  spaghetti, boczek, śmietanka, jajko, parmezan
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Penne del pastore</div>
                <div class="menu-item-price"> 19 </div>
                <div class="menu-item-description">
                  penne, salsiccia, szpinak, pomidory koktajlowe
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Alla Matriciana</div>
                <div class="menu-item-price"> 20 </div>
                <div class="menu-item-description">
                  Muszle, panchetta, cebula, sos pomidorowy, śmietanka,
                  peperonicino, parmezan
                </div>
              </div>
              {/* <div class="menu-item">
                <div class="menu-item-name">Spaghetti bologneze</div>
                <div class="menu-item-price">20</div>
                <div class="menu-item-description">
                  spaghetti, sos pomidorowy, mięso wołowe
                </div>
              </div> */}
              <div class="menu-item">
                <div class="menu-item-name">Gnocchi</div>
                <div class="menu-item-price">21</div>
                <div class="menu-item-description">
                  gnocchi, szpinak gorgonzola, śmietanka, parmezan
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Penne ai quattro formaggi</div>
                <div class="menu-item-price">21</div>
                <div class="menu-item-description">
                  penne, taleggio, gorgonzola,asiago,parmezan,śmietanka
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="menu-section">
              <h2 class="menu-section-title">Panini</h2>
              <div class="menu-item">
                <div class="menu-item-name">Panini Polo</div>
                <div class="menu-item-price">12</div>
                <div class="menu-item-description">
                  Kurczak, mozzarella, cebula czerwona, mix sałat
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Panini Wegetariana</div>
                <div class="menu-item-price">12</div>
                <div class="menu-item-description">
                  Mozzarella, grillowana papryka, cukinia, bakłażan, pomidorki
                  koktajlowe, mix sałat, sos panino
                </div>
                <div class="menu-item">
                  <div class="menu-item-name">Panini Calabrese</div>
                  <div class="menu-item-price">12</div>
                  <div class="menu-item-description">
                    Salami ostre, mozzarella, rukola, pomidorki koktajlowe
                  </div>
                </div>
                <div class="menu-item">
                  <div class="menu-item-name">Panini Parma</div>
                  <div class="menu-item-price">14</div>
                  <div class="menu-item-description">
                    Szynka parmeńska, mozzarella, pomidorki koktajlowe, rukola,
                    oliwa
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="menu-section">
              <h2 class="menu-section-title">Desery</h2>
              <div class="menu-item">
                <div class="menu-item-name">Tiramisu</div>
                <div class="menu-item-price">15</div>
                <div class="menu-item-description"></div>
              </div>
            </div>
          </div> */}
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="menu-section">
              <h2 class="menu-section-title ">Napoje zimne</h2>
              <div class="menu-item">
                <div class="menu-item-name">Pepsi</div>
                <div class="menu-item-price">5</div>
                <div class="menu-item-description">500ml</div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Pepsi max</div>
                <div class="menu-item-price">5</div>
                <div class="menu-item-description">500ml</div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Mirinda</div>
                <div class="menu-item-price">5</div>
                <div class="menu-item-description">500ml</div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">7 up</div>
                <div class="menu-item-price">5</div>
                <div class="menu-item-description">500ml</div>
              </div>
              {/* <div class="menu-item">
                <div class="menu-item-name">Lipton Ice Tea Lemon</div>
                <div class="menu-item-price">5</div>
                <div class="menu-item-description">500ml</div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Lipton Ice Tea Peach</div>
                <div class="menu-item-price">5</div>
                <div class="menu-item-description">500ml</div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Lipton Ice Tea Green Tea</div>
                <div class="menu-item-price">5</div>
                <div class="menu-item-description">500ml</div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Tomma sok pomarańczowy</div>
                <div class="menu-item-price">3,5</div>
                <div class="menu-item-description">330ml</div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Tomma sok jabłkowy</div>
                <div class="menu-item-price">3,5</div>
                <div class="menu-item-description">330ml</div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Tomma sok Grejpfrutowy</div>
                <div class="menu-item-price">3,5</div>
                <div class="menu-item-description">330ml</div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Tomma sok czarna porzeczka</div>
                <div class="menu-item-price">3,5</div>
                <div class="menu-item-description">330ml</div>
              </div> */}
            </div>
          </div>{" "}
          {/* <div class="col-xs-12 col-sm-12 col-md-6">
            <div class="menu-section">
              <h2 class="menu-section-title ">Napoje gorące</h2>
              <div class="menu-item">
                <div class="menu-item-name">Espresso</div>
                <div class="menu-item-price">-</div>
                <div class="menu-item-description"></div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Dopio</div>
                <div class="menu-item-price">-</div>
                <div class="menu-item-description"></div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Americano</div>
                <div class="menu-item-price">-</div>
                <div class="menu-item-description"></div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Capucino</div>
                <div class="menu-item-price">-</div>
                <div class="menu-item-description"></div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Latte Maccichiato</div>
                <div class="menu-item-price">-</div>
                <div class="menu-item-description"></div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Caffe Late</div>
                <div class="menu-item-price">-</div>
                <div class="menu-item-description"></div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Herbata czarna</div>
                <div class="menu-item-price">-</div>
                <div class="menu-item-description"></div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Herbata zielona</div>
                <div class="menu-item-price">-</div>
                <div class="menu-item-description"></div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Herbata owocowa</div>
                <div class="menu-item-price">-</div>
                <div class="menu-item-description"></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </Layout>
)

export default MenuPage
