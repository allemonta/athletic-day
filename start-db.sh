if test ! -d ./data
then
	mkdir data
fi

if test ! -d ./data/mongodb
then
	mkdir data/mongodb
fi



$HOME/mongodb/bin/mongod.exe --dbpath=./data/mongodb