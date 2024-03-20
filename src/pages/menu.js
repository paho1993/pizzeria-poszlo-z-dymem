import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const MenuPage = () => (
  <Layout>
    <Seo title="Nasze menu" />
    <div id="restaurant-menu">
      <div class="container">
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
                <div class="menu-item-price">45</div>
                <div class="menu-item-price2">30</div>
                <div class="menu-item-description">
                  sos pomidorowy / mozzarella fior di latte / bazylia
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Prosciutto</div>
                <div class="menu-item-price">50</div>
                <div class="menu-item-price2">35</div>
                <div class="menu-item-description">
                  sos pomidorowy / mozzarella fior di latte / prosciutto cotto
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Diavola</div>
                <div class="menu-item-price">50</div>
                <div class="menu-item-price2">35</div>
                <div class="menu-item-description">
                  sos pomidorowy / mozzarella fior di latte / salami piccante
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Napoli</div>
                <div class="menu-item-price">50</div>
                <div class="menu-item-price2">35</div>
                <div class="menu-item-description">
                  sos pomidorowy / mozzarella fior di latte / salami napoli
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Prosciutto e funghi</div>
                <div class="menu-item-price">52</div>
                <div class="menu-item-price2">37</div>
                <div class="menu-item-description">
                  sos pomidorowy / mozzarella fior di latte / prosciutto cotto /
                  pieczarki
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Diavola e funghi</div>
                <div class="menu-item-price">52</div>
                <div class="menu-item-price2">37</div>
                <div class="menu-item-description">
                  sos pomidorowy / mozzarella fior di latte / salami piccante /
                  pieczarki
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Campagnola</div>
                <div class="menu-item-price">57</div>
                <div class="menu-item-price2">39</div>
                <div class="menu-item-description">
                  mozzarella fior di latte / cukinia / pancetta / scamorza /
                  oliwa truflowa
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Spinacina</div>
                <div class="menu-item-price">55</div>
                <div class="menu-item-price2">38</div>
                <div class="menu-item-description">
                  sos pomidorowy / mozzarella fior di latte / liście szpinaku /
                  czosnek / feta / krem balsamiczny
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Vegetariana</div>
                <div class="menu-item-price">54</div>
                <div class="menu-item-price2">37</div>
                <div class="menu-item-description">
                  sos pomidorowy / mozzarella fior di latte / cukinia / pieczona
                  papryka / pomidorki koktajlowe
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Napoletana</div>
                <div class="menu-item-price">56</div>
                <div class="menu-item-price2">38</div>
                <div class="menu-item-description">
                  mozzarella fior di latte / salsiccia / pomidorki koktajlowe /
                  grana padano / ricotta / bazylia
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Carciofi</div>
                <div class="menu-item-price">56</div>
                <div class="menu-item-price2">38</div>
                <div class="menu-item-description">
                  sos pomidorowy / mozzarella fior di latte / prosciutto cotto /
                  karczochy / mascarpone / bazylia
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Tonno e cipolla</div>
                <div class="menu-item-price">55</div>
                <div class="menu-item-price2">38</div>
                <div class="menu-item-description">
                  sos pomidorowy / mozzarella fior di latte / tuńczyk / oliwki
                  czarne / czerwona cebula
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Montanara</div>
                <div class="menu-item-price">55</div>
                <div class="menu-item-price2">38</div>
                <div class="menu-item-description">
                  sos pomidorowy / mozzarella fior di latte / salami napoli /
                  pieczarki / scamorza
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Pollo e spinaci</div>
                <div class="menu-item-price">55</div>
                <div class="menu-item-price2">38</div>
                <div class="menu-item-description">
                  sos pomidorowy / mozzarella fior di latte / liście szpinaku /
                  kurczak / pieczarki / czerwona cebula
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Casareccia</div>
                <div class="menu-item-price">57</div>
                <div class="menu-item-price2">39</div>
                <div class="menu-item-description">
                  sos pomidorowy / mozzarella fior di latte / salsiccia /
                  gorgonzola / czerwona cebula
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Capricciosa</div>
                <div class="menu-item-price">57</div>
                <div class="menu-item-price2">39</div>
                <div class="menu-item-description">
                  sos pomidorowy / mozzarella fior di latte / prosciutto cotto /
                  oliwki czarne / pieczarki / karczochy
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Ala Carbonara</div>
                <div class="menu-item-price">57</div>
                <div class="menu-item-price2">39</div>
                <div class="menu-item-description">
                  creme fraiche / mozzarella fior di latte / pieczarki / cebula
                  czerwona / pancetta / grana padano / pomidorki koktajlowe
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Don Camillo</div>
                <div class="menu-item-price">56</div>
                <div class="menu-item-price2">38</div>
                <div class="menu-item-description">
                  creme fraiche / mozzarella fior di latte / gruszka /
                  gorgonzola / prażone orzechy włoskie / rukola
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Nduja</div>
                <div class="menu-item-price">57</div>
                <div class="menu-item-price2">39</div>
                <div class="menu-item-description">
                  sos pomidorowy / świeża mozzarella fior di latte / pasta nduja
                  / cebula czerwona / jalapeno / mascarpone
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Don Pietro</div>
                <div class="menu-item-price">57</div>
                <div class="menu-item-price2">39</div>
                <div class="menu-item-description">
                  sos pomidorowy / świeża mozzarella fior di latte / salami
                  piccante / pomidorki koktajlowe / pesto
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Quattro Formaggi 2.0</div>
                <div class="menu-item-price">57</div>
                <div class="menu-item-price2">39</div>
                <div class="menu-item-description">
                  creme fraiche / mozzarella fior di latte / gorgonzola /
                  scamorza / ser tallegio
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Sfiziosa</div>
                <div class="menu-item-price">55</div>
                <div class="menu-item-price2">38</div>
                <div class="menu-item-description">
                  mozarella fior di latte / salami napoli / tallegio / cebula
                  czerwona / oliwki
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Abruzzese</div>
                <div class="menu-item-price">58</div>
                <div class="menu-item-price2">40</div>
                <div class="menu-item-description">
                  mozzarella fior di latte / pancetta / plastry ziemniaków /
                  gorgonzola / ricotta / rozmaryn
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="menu-section">
              <h2 class="menu-section-title">Calzone</h2>
              <div class="menu-item">
                <div class="menu-item-name">Calzone Classico</div>
                <div class="menu-item-price">37</div>
                <div class="menu-item-description">
                  sos pomidorowy / mozzarella fior di latte / prosciutto cotto /
                  pieczarki
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Calzone Poszło z Dymem</div>
                <div class="menu-item-price">41</div>
                <div class="menu-item-description">
                  sos pomidorowy / mozzarella fior di latte / prosciutto cotto /
                  salami piccante / gorgonzola
                </div>
              </div>
            </div>
          </div>
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
                <div class="menu-item-price">5</div>
                <div class="menu-item-price2">4</div>
                <div class="menu-item-description">
                  pomidorki koktajlowe / cebula czerwona / czosnek / pieczarki /
                  oliwki czarne / jalapeno / pomidory suszone / rukola / liście
                  szpinaku / karczochy / pieczona papryka / cukinia
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Mięsa</div>
                <div class="menu-item-price">7</div>
                <div class="menu-item-price2">6</div>
                <div class="menu-item-description">
                  salami łagodne / salami piccante / kurczak / pancetta /
                  saliccia / pasta nduja / prosciutto cotto
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Sery</div>
                <div class="menu-item-price">7</div>
                <div class="menu-item-price2">6</div>
                <div class="menu-item-description">
                  mozzarella fior di latte / gorgonzola / grana padano / włoski
                  ser wędzony / mascarpone / ricotta
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
                <div class="menu-item-name">Oliwa czosnkowa</div>
                <div class="menu-item-price">3</div>
                <div class="menu-item-description"></div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Oliwa pikantna</div>
                <div class="menu-item-price">3</div>

                <div class="menu-item-description"></div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="menu-section">
              <h2 class="menu-section-title">Sałatki</h2>
              <div class="menu-item">
                <div class="menu-item-name">Cesar</div>
                <div class="menu-item-price">34</div>
                <div class="menu-item-description">
                  grillowany kurczak / sałata rzymska / bekon / grana padano /
                  pomidorki koktajlowe / czerwona cebula / sos cezar
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Insalata Pera</div>
                <div class="menu-item-price">34</div>
                <div class="menu-item-description">
                  gruszka / rukola / orzechy włoskie / gorgonzola / vinegret
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Spinaci con Arancia</div>
                <div class="menu-item-price">34</div>
                <div class="menu-item-description">
                  pomarańcza / liście szpinaku / ser kozi / orzechy włoskie
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Insalata con Gamberi</div>
                <div class="menu-item-price">42</div>
                <div class="menu-item-description">
                  krewetki / rukola / awokado / pomidorki koktajlowe / oliwa
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Insalata con Filetto di Manzo</div>
                <div class="menu-item-price">48</div>
                <div class="menu-item-description">
                  polędwica wołowa / rukola / pomidorki koktajlowe / płatki
                  parmezanu / krem balsamiczny
                </div>
              </div>
            </div>
            <div
              class="menu-section-additions section-title text-center"
              style={{ justifyContent: "center" }}
            >
              Przy zamówieniu na wynos doliczamy koszt opakowania:
              <div>Pizza 30cm - 1,5 zł</div>
              <div>Pizza 40cm - 2 zł</div>
              <div>Sałatka - 1 zł</div>
              <div>Makaron - 1 zł</div>
              <div>Calzone - 2 zł</div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="menu-section" style={{ marginTop: "80px" }}>
              <h2 class="menu-section-title">Pasta</h2>
              <div class="menu-item">
                <div class="menu-item-name">Arrabbiata</div>
                <div class="menu-item-price">31</div>
                <div class="menu-item-description">
                  penne / sos pomidorowy / chili / czosnek / pietruszka
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Sorrentina</div>
                <div class="menu-item-price">31</div>
                <div class="menu-item-description">
                  gnocchi / sos pomidorowy / mozzarella fior di latte / bazylia
                  / grana padano
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Penne Pollo</div>
                <div class="menu-item-price">35</div>
                <div class="menu-item-description">
                  penne / kurczak / cukinia / biała cebula / śmietanka / grana
                  padano
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Carbonara</div>
                <div class="menu-item-price">35</div>
                <div class="menu-item-description">
                  spaghetti / guanciale / zółtka jaj / grana padano / świeżo
                  zmielony pieprz
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Spinaci e Gorgonzola</div>
                <div class="menu-item-price">35</div>
                <div class="menu-item-description">
                  gnocchi / liście szpinaku / gorgonzola / śmietanka / grana
                  padano
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Salmone</div>
                <div class="menu-item-price">44</div>
                <div class="menu-item-description">
                  tagliatelle / łosoś / liście szpinaku / czosnek / pietruszka /
                  śmietanka
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Tagliatelle con gamberi</div>
                <div class="menu-item-price">44</div>
                <div class="menu-item-description">
                  tagliatelle / krewetki / cukinia / czosnek / pomidorki
                  koktajlowe / białe wino / pietruszka / peperonicino
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Tagliatelle filetto e porcini</div>
                <div class="menu-item-price">48</div>
                <div class="menu-item-description">
                  polędwica wołowa / borowiki / czosnek / pietruszka / śmietanka
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
                <div class="menu-item-price">21</div>
                <div class="menu-item-description">
                  kurczak / mozzarella fior di latte / cebula czerwona / rukola
                  / sos panino
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Panini Vege</div>
                <div class="menu-item-price">21</div>
                <div class="menu-item-description">
                  pieczona papryka / cukinia / pomidorki koktajlowe / rukola /
                  sos panino
                </div>
                <div class="menu-item">
                  <div class="menu-item-name">Panini Calabrese</div>
                  <div class="menu-item-price">21</div>
                  <div class="menu-item-description">
                    salami piccante / mozzarella fior di latte / rukola /
                    pomidorki koktajlowe / sos panino
                  </div>
                </div>
                <div class="menu-item">
                  <div class="menu-item-name">Panini Prosciutto</div>
                  <div class="menu-item-price">21</div>
                  <div class="menu-item-description">
                    prosciutto cotto / mozzarella fior di latte / pomidor /
                    rukola / oliwa
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="menu-section">
              <h2 class="menu-section-title">Desery</h2>
              <div class="menu-item">
                <div class="menu-item-name">Tiramisu</div>
                <div class="menu-item-price">24</div>
                <div class="menu-item-description">
                  dostępne czwartek - niedziela
                </div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Cannolli</div>
                <div class="menu-item-price">16</div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="menu-section">
              <h2 class="menu-section-title ">Napoje zimne</h2>
              <div class="menu-item">
                <div class="menu-item-name">Lemonsoda</div>
                <div class="menu-item-price">10</div>
                <div class="menu-item-description">330ml</div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Oransoda</div>
                <div class="menu-item-price">10</div>
                <div class="menu-item-description">330ml</div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">
                  Piwo bezalkoholowe włoski Superior / Peroni
                </div>
                <div class="menu-item-price">12</div>
                <div class="menu-item-description">330ml</div>
              </div>
              <div class="menu-item">
                <div class="menu-item-name">Piwo bezalkoholowe Heineken</div>
                <div class="menu-item-price">11</div>
                <div class="menu-item-description">500ml</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default MenuPage
