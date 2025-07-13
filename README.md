# Mobile API Projects

This repository contains a backend Web API solution developed with .NET. It is structured with a layered architecture, making it suitable as a backend for mobile applications.

---

## English

### Project Goal

This project is a Web API built on the .NET platform, designed to provide backend services for mobile applications. It follows a clean, layered architecture to separate concerns, making the codebase scalable and maintainable.

### Project Structure

The solution is divided into several projects, each with a specific responsibility:

* **`WebAPI`**: The entry point of the application. It handles incoming HTTP requests, routes them to the appropriate controllers, and returns responses to the client (e.g., a mobile app).
* **`Business`**: This layer contains the core business logic, services, and rules of the application. It acts as an intermediary between the `WebAPI` and `DataAccess` layers.
* **`DataAccess`**: Responsible for all data access operations. It interacts with the database to perform CRUD (Create, Read, Update, Delete) operations.
* **`Entities`**: Contains the POCO (Plain Old CLR Object) classes that represent the data models and domain objects of the application (e.g., `User`, `Product`).

### Technology Stack

* **Backend:** .NET (Core / 5+), C#
* **Architecture:** Layered (N-Tier) Architecture, RESTful API

### Installation and Usage

Follow the steps below to run the project on your local machine:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/muhammedyayla/mobile-api-projects.git](https://github.com/muhammedyayla/mobile-api-projects.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd mobile-api-projects
    ```
3.  **Open the solution:**
    * Open the `MobileApiProjects.sln` file in Visual Studio.
    * Build the solution to restore NuGet packages.
    * Set `WebAPI` as the startup project.
    * Run the project (usually by pressing `F5`).

4.  **Alternatively, use the .NET CLI:**
    * Navigate to the `WebAPI` folder: `cd WebAPI`
    * Run the project:
        ```bash
        dotnet run
        ```

The API will start, and you can access its endpoints through the specified local URL (e.g., `https://localhost:5001/swagger`).

---

## Türkçe

### Projenin Amacı

Bu proje, mobil uygulamalar için arka uç (backend) servisleri sağlamak üzere .NET platformunda geliştirilmiş bir Web API çözümüdür. Sorumlulukların ayrıştırıldığı temiz ve katmanlı bir mimariyi takip ederek, kod tabanını ölçeklenebilir ve sürdürülebilir hale getirir.

### Proje Yapısı

Proje, her biri belirli bir sorumluluğa sahip birkaç katmana ayrılmıştır:

* **`WebAPI`**: Uygulamanın giriş noktasıdır. Gelen HTTP isteklerini karşılar, bunları uygun denetleyicilere (controller) yönlendirir ve istemciye (örneğin mobil uygulamaya) yanıtları döndürür.
* **`Business`**: Uygulamanın temel iş mantığını, servislerini ve kurallarını içerir. `WebAPI` ve `DataAccess` katmanları arasında bir aracı görevi görür.
* **`DataAccess`**: Tüm veri erişim işlemlerinden sorumludur. CRUD (Oluşturma, Okuma, Güncelleme, Silme) işlemlerini gerçekleştirmek için veritabanı ile etkileşime girer.
* **`Entities`**: Uygulamanın veri modellerini ve alan nesnelerini (örneğin `User`, `Product`) temsil eden POCO (Plain Old CLR Object) sınıflarını içerir.

### Kullanılan Teknolojiler

* **Backend:** .NET (Core / 5+), C#
* **Mimari:** Katmanlı Mimari (N-Tier), RESTful API

### Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1.  **Repository'yi klonlayın:**
    ```bash
    git clone [https://github.com/muhammedyayla/mobile-api-projects.git](https://github.com/muhammedyayla/mobile-api-projects.git)
    ```
2.  **Proje dizinine gidin:**
    ```bash
    cd mobile-api-projects
    ```
3.  **Çözümü açın:**
    * `MobileApiProjects.sln` dosyasını Visual Studio ile açın.
    * NuGet paketlerini geri yüklemek için çözümü derleyin (Build).
    * `WebAPI` projesini başlangıç projesi olarak ayarlayın.
    * Projeyi çalıştırın (genellikle `F5` tuşuna basarak).

4.  **Alternatif olarak .NET CLI kullanın:**
    * `WebAPI` klasörüne gidin: `cd WebAPI`
    * Projeyi çalıştırın:
        ```bash
        dotnet run
        ```

API başlayacak ve belirtilen yerel URL üzerinden (örneğin `https://localhost:5001/swagger`) endpoint'lere erişebilirsiniz.

#### This project made by Muhammet Yayla with Html, Typescript, CSS, Boostrap, ionic, angular and i used [Openweather](https://openweathermap.org/api) for api. Also i used [api-ninjas.com](https://api-ninjas.com/api/cars) for movie api etc.



## Project Images
![](/mobile-api-projects/src/assets/movie1.png)
![](/mobile-api-projects/src/assets/movie2.png)
![](mobile-api-projects/src/assets/todo.png)
