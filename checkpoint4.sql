create table tableware (
id SERIAL primary KEY,
name varchar(255) not NULL,
qty int not NULL
)

create table office (
id SERIAL primary KEY,
name varchar(255) not NULL,
location varchar(255) not null,
starting_year int not NULL
)

alter table tableware
add office_id int

alter table tableware
add constraint FK_office
foreign KEY(office_id) references office(id)