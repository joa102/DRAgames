package com.example.demo.services;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.dto.TopConsolesDataDto;

// @Component("topConsolesDataService")
@SpringBootApplication
public class TopConsolesDataService {

    public List<TopConsolesDataDto> retrieveTopConsolesData() {

        List<TopConsolesDataDto> topConsolesData = new ArrayList<>();

        try {
            Document webPage = Jsoup.connect(
                "https://en.wikipedia.org/wiki/List_of_best-selling_game_consoles"
                ).get();

            Element tbody = webPage.getElementsByTag("tbody").get(0);

            List<Element> rows = tbody.children().subList(2, tbody.children().size());

            for (Element row : rows) {

                // Elements ths = row.getElementsByTag("th");
                // if(ths.isEmpty())
                //     continue;

                // String country = ths.get(0).text();
                // Elements tds = row.getElementsByTag("td");

                // if (tds.size() < 3)
                //     continue;

                // Integer cases = toIntOrNull(tds.get(1).text());
                // Integer deaths = toIntOrNull(tds.get(2).text());
                // Integer recovered = toIntOrNull(tds.get(3).text());

                Element platform = row.getElementsByTag("td").get(0);
                Element firm = row.getElementsByTag("td").get(2);
                Element released = row.getElementsByTag("td").get(3);
                Element unitSold = row.getElementsByTag("td").get(4);

                topConsolesData.add(new TopConsolesDataDto(platform.text(), firm.text(), released.text(), unitSold.text()));
            }

            return topConsolesData;

        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    // private Integer toIntOrNull(String replace) {
    //     try {
    //         return Integer.parseInt(replace.replace(",", ""));
    //     } catch (NumberFormatException e) {
    //         return null;
    //     }
    // }
}



// package com.example.demo.services;

// import java.io.IOException;
// import java.util.ArrayList;
// import java.util.List;

// import org.jsoup.Jsoup;
// import org.jsoup.nodes.Document;
// import org.jsoup.nodes.Element;
// import org.jsoup.select.Elements;
// import org.springframework.stereotype.Component;

// import com.example.demo.dto.TopConsolesDataDto;

// @Component("topConsolesDataService")
// public class TopConsolesDataService {
//     public List<TopConsolesDataDto> retrieveTopConsolesData() {

//         List<TopConsolesDataDto> topConsolesData = new ArrayList<>();

//         try {
//             Document webPage = Jsoup.connect("https://en.wikipedia.org/wiki/COVID-19_pandemic_by_country_and_territory")
//                     .get();
//             Element tbody = webPage.getElementById("covid-19-cases-deaths-and-rates-by-location").getElementsByTag("tbody").get(0);

//             List<Element> rows = tbody.children().subList(2, tbody.children().size());

//             for (Element row : rows) {

//                 Elements ths = row.getElementsByTag("th");
//                 if(ths.isEmpty())
//                     continue;

//                 String country = ths.get(0).text();
//                 Elements tds = row.getElementsByTag("td");

//                 if (tds.size() < 3)
//                     continue;

//                 Integer cases = toIntOrNull(tds.get(1).text());
//                 Integer deaths = toIntOrNull(tds.get(2).text());
//                 Integer recovered = toIntOrNull(tds.get(3).text());

//                 topConsolesData.add(new TopConsolesDataDto(country, cases, deaths, recovered));
//             }

//             return topConsolesData;

//         } catch (IOException e) {
//             e.printStackTrace();
//         }
//         return null;
//     }

//     private Integer toIntOrNull(String replace) {
//         try {
//             return Integer.parseInt(replace.replace(",", ""));
//         } catch (NumberFormatException e) {
//             return null;
//         }
//     }
// }



// package com.example.demo.services;

// import java.util.ArrayList;
// import java.util.List;

// import com.microsoft.playwright.Browser;
// import com.microsoft.playwright.Page;
// import com.microsoft.playwright.Playwright;

// import org.jsoup.Jsoup;
// import org.jsoup.nodes.Document;
// import org.jsoup.nodes.Element;
// import org.jsoup.select.Elements;
// import org.springframework.stereotype.Component;

// import com.example.demo.dto.TopConsolesDataDto;

// @Component("topConsolesService")
// public class TopConsolesDataService {
//     public List<TopConsolesDataDto> retrieveTopConsolesData() {

//         List<TopConsolesDataDto> topConsolesList = new ArrayList<>();

//         Playwright playwright = Playwright.create();
//         Browser browser = playwright.webkit().launch();
//         Page page = browser.newPage();
//         page.navigate("https://www.ual.es/estudios/grados");
//         page.waitForSelector(
//                 "body > div > div > div.container.main > div > section > div:nth-child(2) > div:nth-child(17) > div:nth-child(2) > div:nth-child(9) > div > ul > li:nth-child(2) > a > span");

//         Document webPage = Jsoup.parse(page.content());

//         Elements topConsoles = webPage.select(".sinvinetas > li > a");

//         for (Element topConsole : topConsoles) {
//             if (topConsole == null)
//                 continue;
//             Element nombrElement = topConsole.selectFirst(".ng-binding");
//             if (nombrElement == null)
//                 continue;
//             String nombre = nombrElement.text();
//             String codigo = topConsole.attr("href").replace("/estudios/grados/presentacion/", "");
//             topConsolesList.add(new TopConsolesDataDto(nombre, codigo));
//         }

//         return topConsolesList;
//     }
// }
